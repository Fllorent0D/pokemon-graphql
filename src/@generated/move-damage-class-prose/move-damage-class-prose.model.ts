import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_damage_classes } from '../move-damage-classes/move-damage-classes.model';

@ObjectType()
export class move_damage_class_prose {

    @Field(() => Int, {nullable:false})
    move_damage_class_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_damage_classes, {nullable:false})
    move_damage_classes?: move_damage_classes;
}
