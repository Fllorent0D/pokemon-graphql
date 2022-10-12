import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesWhereUniqueInput } from './item-pocket-names-where-unique.input';
import { Type } from 'class-transformer';
import { item_pocket_namesUpdateWithoutItem_pocketsInput } from './item-pocket-names-update-without-item-pockets.input';

@InputType()
export class item_pocket_namesUpdateWithWhereUniqueWithoutItem_pocketsInput {

    @Field(() => item_pocket_namesWhereUniqueInput, {nullable:false})
    @Type(() => item_pocket_namesWhereUniqueInput)
    where!: item_pocket_namesWhereUniqueInput;

    @Field(() => item_pocket_namesUpdateWithoutItem_pocketsInput, {nullable:false})
    @Type(() => item_pocket_namesUpdateWithoutItem_pocketsInput)
    data!: item_pocket_namesUpdateWithoutItem_pocketsInput;
}
