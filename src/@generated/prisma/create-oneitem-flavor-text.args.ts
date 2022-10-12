import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textCreateInput } from '../item-flavor-text/item-flavor-text-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemFlavorTextArgs {

    @Field(() => item_flavor_textCreateInput, {nullable:false})
    @Type(() => item_flavor_textCreateInput)
    data!: item_flavor_textCreateInput;
}
