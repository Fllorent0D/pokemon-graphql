import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_targets } from '../move-targets/move-targets.model';

@ObjectType()
export class move_target_prose {

    @Field(() => Int, {nullable:false})
    move_target_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_targets, {nullable:false})
    move_targets?: move_targets;
}
