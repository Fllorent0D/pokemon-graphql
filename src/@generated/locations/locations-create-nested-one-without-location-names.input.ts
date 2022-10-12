import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutLocation_namesInput } from './locations-create-without-location-names.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutLocation_namesInput } from './locations-create-or-connect-without-location-names.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class locationsCreateNestedOneWithoutLocation_namesInput {

    @Field(() => locationsCreateWithoutLocation_namesInput, {nullable:true})
    @Type(() => locationsCreateWithoutLocation_namesInput)
    create?: locationsCreateWithoutLocation_namesInput;

    @Field(() => locationsCreateOrConnectWithoutLocation_namesInput, {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutLocation_namesInput)
    connectOrCreate?: locationsCreateOrConnectWithoutLocation_namesInput;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: locationsWhereUniqueInput;
}
