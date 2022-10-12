import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_textUpdateManyMutationInput } from '../item-flavor-text/item-flavor-text-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_flavor_textWhereInput } from '../item-flavor-text/item-flavor-text-where.input';

@ArgsType()
export class UpdateManyitemFlavorTextArgs {

    @Field(() => item_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => item_flavor_textUpdateManyMutationInput)
    data!: item_flavor_textUpdateManyMutationInput;

    @Field(() => item_flavor_textWhereInput, {nullable:true})
    @Type(() => item_flavor_textWhereInput)
    where?: item_flavor_textWhereInput;
}
