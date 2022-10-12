import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { item_pockets } from '../item-pockets/item-pockets.model';

@ObjectType()
export class item_pocket_names {

    @Field(() => Int, {nullable:false})
    item_pocket_id!: number;

    @Field(() => Int, {nullable:false})
    local_language_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => item_pockets, {nullable:false})
    item_pockets?: item_pockets;
}
