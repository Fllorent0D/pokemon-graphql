import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsUpdateInput } from '../item-pockets/item-pockets-update.input';
import { Type } from 'class-transformer';
import { item_pocketsWhereUniqueInput } from '../item-pockets/item-pockets-where-unique.input';

@ArgsType()
export class UpdateOneitemPocketsArgs {

    @Field(() => item_pocketsUpdateInput, {nullable:false})
    @Type(() => item_pocketsUpdateInput)
    data!: item_pocketsUpdateInput;

    @Field(() => item_pocketsWhereUniqueInput, {nullable:false})
    @Type(() => item_pocketsWhereUniqueInput)
    where!: item_pocketsWhereUniqueInput;
}
