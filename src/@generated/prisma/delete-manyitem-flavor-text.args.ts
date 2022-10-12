import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textWhereInput } from '../item-flavor-text/item-flavor-text-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemFlavorTextArgs {

    @Field(() => item_flavor_textWhereInput, {nullable:true})
    @Type(() => item_flavor_textWhereInput)
    where?: item_flavor_textWhereInput;
}
