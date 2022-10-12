import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textUpdateInput } from '../item-flavor-text/item-flavor-text-update.input';
import { Type } from 'class-transformer';
import { item_flavor_textWhereUniqueInput } from '../item-flavor-text/item-flavor-text-where-unique.input';

@ArgsType()
export class UpdateOneitemFlavorTextArgs {

    @Field(() => item_flavor_textUpdateInput, {nullable:false})
    @Type(() => item_flavor_textUpdateInput)
    data!: item_flavor_textUpdateInput;

    @Field(() => item_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_textWhereUniqueInput)
    where!: item_flavor_textWhereUniqueInput;
}
