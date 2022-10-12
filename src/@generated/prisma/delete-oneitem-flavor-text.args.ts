import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textWhereUniqueInput } from '../item-flavor-text/item-flavor-text-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemFlavorTextArgs {

    @Field(() => item_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_textWhereUniqueInput)
    where!: item_flavor_textWhereUniqueInput;
}
