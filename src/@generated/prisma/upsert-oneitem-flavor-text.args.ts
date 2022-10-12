import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textWhereUniqueInput } from '../item-flavor-text/item-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { item_flavor_textCreateInput } from '../item-flavor-text/item-flavor-text-create.input';
import { item_flavor_textUpdateInput } from '../item-flavor-text/item-flavor-text-update.input';

@ArgsType()
export class UpsertOneitemFlavorTextArgs {

    @Field(() => item_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_textWhereUniqueInput)
    where!: item_flavor_textWhereUniqueInput;

    @Field(() => item_flavor_textCreateInput, {nullable:false})
    @Type(() => item_flavor_textCreateInput)
    create!: item_flavor_textCreateInput;

    @Field(() => item_flavor_textUpdateInput, {nullable:false})
    @Type(() => item_flavor_textUpdateInput)
    update!: item_flavor_textUpdateInput;
}
