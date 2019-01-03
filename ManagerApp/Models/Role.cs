﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ManagerApp.Models
{
    public class Role
    {
        public Role()
        {
            this.CreatedAt = DateTime.Now;
            this.UpdatedAt = DateTime.Now;
            this.DeletedAt = DateTime.Now;
            this.Status = RoleStatus.Active;
        }
        [Key]
        [Required]
        public int Id { get; set; }
        [Required(ErrorMessage = "Please enter Name")]
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime DeletedAt { get; set; }
        public RoleStatus Status { get; set; }
    }
    public enum RoleStatus
    {
        Active = 1,
        Deactive = 0
    }
}
