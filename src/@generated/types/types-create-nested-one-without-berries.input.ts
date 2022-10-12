import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutBerriesInput } from './types-create-without-berries.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutBerriesInput } from './types-create-or-connect-without-berries.input';
import { typesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class typesCreateNestedOneWithoutBerriesInput {

    @Field(() => typesCreateWithoutBerriesInput, {nullable:true})
    @Type(() => typesCreateWithoutBerriesInput)
    create?: typesCreateWithoutBerriesInput;

    @Field(() => typesCreateOrConnectWithoutBerriesInput, {nullable:true})
    @Type(() => typesCreateOrConnectWithoutBerriesInput)
    connectOrCreate?: typesCreateOrConnectWithoutBerriesInput;

    @Field(() => typesWhereUniqueInput, {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: typesWhereUniqueInput;
}
