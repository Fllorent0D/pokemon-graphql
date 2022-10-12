import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_namesWhereUniqueInput } from './item-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_namesUpdateWithoutItemsInput } from './item-names-update-without-items.input';

@InputType()
export class item_namesUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => item_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_namesWhereUniqueInput)
    where!: item_namesWhereUniqueInput;

    @Field(() => item_namesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_namesUpdateWithoutItemsInput)
    data!: item_namesUpdateWithoutItemsInput;
}
