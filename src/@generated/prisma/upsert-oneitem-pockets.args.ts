import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsWhereUniqueInput } from '../item-pockets/item-pockets-where-unique.input';
import { Type } from 'class-transformer';
import { item_pocketsCreateInput } from '../item-pockets/item-pockets-create.input';
import { item_pocketsUpdateInput } from '../item-pockets/item-pockets-update.input';

@ArgsType()
export class UpsertOneitemPocketsArgs {

    @Field(() => item_pocketsWhereUniqueInput, {nullable:false})
    @Type(() => item_pocketsWhereUniqueInput)
    where!: item_pocketsWhereUniqueInput;

    @Field(() => item_pocketsCreateInput, {nullable:false})
    @Type(() => item_pocketsCreateInput)
    create!: item_pocketsCreateInput;

    @Field(() => item_pocketsUpdateInput, {nullable:false})
    @Type(() => item_pocketsUpdateInput)
    update!: item_pocketsUpdateInput;
}
