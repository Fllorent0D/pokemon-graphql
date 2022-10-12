import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutItem_categoriesInput } from './items-create-without-item-categories.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutItem_categoriesInput } from './items-create-or-connect-without-item-categories.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsUncheckedCreateNestedManyWithoutItem_categoriesInput {

    @Field(() => [itemsCreateWithoutItem_categoriesInput], {nullable:true})
    @Type(() => itemsCreateWithoutItem_categoriesInput)
    create?: Array<itemsCreateWithoutItem_categoriesInput>;

    @Field(() => [itemsCreateOrConnectWithoutItem_categoriesInput], {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutItem_categoriesInput)
    connectOrCreate?: Array<itemsCreateOrConnectWithoutItem_categoriesInput>;

    @Field(() => [itemsWhereUniqueInput], {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: Array<itemsWhereUniqueInput>;
}
