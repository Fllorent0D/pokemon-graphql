import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { moves } from '../moves/moves.model';

@ObjectType()
export class move_flavor_summaries {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:true})
    flavor_summary!: string | null;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => moves, {nullable:false})
    moves?: moves;
}
