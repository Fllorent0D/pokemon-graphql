import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsUpdateManyMutationInput } from '../item-pockets/item-pockets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_pocketsWhereInput } from '../item-pockets/item-pockets-where.input';

@ArgsType()
export class UpdateManyitemPocketsArgs {

    @Field(() => item_pocketsUpdateManyMutationInput, {nullable:false})
    @Type(() => item_pocketsUpdateManyMutationInput)
    data!: item_pocketsUpdateManyMutationInput;

    @Field(() => item_pocketsWhereInput, {nullable:true})
    @Type(() => item_pocketsWhereInput)
    where?: item_pocketsWhereInput;
}
