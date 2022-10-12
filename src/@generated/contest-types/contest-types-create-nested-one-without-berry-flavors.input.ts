import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_typesCreateWithoutBerry_flavorsInput } from './contest-types-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { contest_typesCreateOrConnectWithoutBerry_flavorsInput } from './contest-types-create-or-connect-without-berry-flavors.input';
import { contest_typesWhereUniqueInput } from './contest-types-where-unique.input';

@InputType()
export class contest_typesCreateNestedOneWithoutBerry_flavorsInput {

    @Field(() => contest_typesCreateWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => contest_typesCreateWithoutBerry_flavorsInput)
    create?: contest_typesCreateWithoutBerry_flavorsInput;

    @Field(() => contest_typesCreateOrConnectWithoutBerry_flavorsInput, {nullable:true})
    @Type(() => contest_typesCreateOrConnectWithoutBerry_flavorsInput)
    connectOrCreate?: contest_typesCreateOrConnectWithoutBerry_flavorsInput;

    @Field(() => contest_typesWhereUniqueInput, {nullable:true})
    @Type(() => contest_typesWhereUniqueInput)
    connect?: contest_typesWhereUniqueInput;
}
