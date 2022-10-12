import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_pocketsWhereUniqueInput } from '../item-pockets/item-pockets-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemPocketsArgs {

    @Field(() => item_pocketsWhereUniqueInput, {nullable:false})
    @Type(() => item_pocketsWhereUniqueInput)
    where!: item_pocketsWhereUniqueInput;
}
