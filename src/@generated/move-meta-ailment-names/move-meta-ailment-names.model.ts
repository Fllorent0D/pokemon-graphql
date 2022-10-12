import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { move_meta_ailments } from '../move-meta-ailments/move-meta-ailments.model';

@ObjectType()
export class move_meta_ailment_names {

    @Field(() => Int, {nullable:false})
    move_meta_ailment_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => move_meta_ailments, {nullable:false})
    move_meta_ailments?: move_meta_ailments;
}
