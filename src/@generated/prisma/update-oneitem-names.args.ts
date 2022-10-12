import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_namesUpdateInput } from '../item-names/item-names-update.input';
import { Type } from 'class-transformer';
import { item_namesWhereUniqueInput } from '../item-names/item-names-where-unique.input';

@ArgsType()
export class UpdateOneitemNamesArgs {

    @Field(() => item_namesUpdateInput, {nullable:false})
    @Type(() => item_namesUpdateInput)
    data!: item_namesUpdateInput;

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;
}
