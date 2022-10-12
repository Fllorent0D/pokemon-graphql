import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { locationsCreateWithoutLocation_areasInput } from './locations-create-without-location-areas.input';
import { Type } from 'class-transformer';
import { locationsCreateOrConnectWithoutLocation_areasInput } from './locations-create-or-connect-without-location-areas.input';
import { locationsWhereUniqueInput } from './locations-where-unique.input';

@InputType()
export class locationsCreateNestedOneWithoutLocation_areasInput {

    @Field(() => locationsCreateWithoutLocation_areasInput, {nullable:true})
    @Type(() => locationsCreateWithoutLocation_areasInput)
    create?: locationsCreateWithoutLocation_areasInput;

    @Field(() => locationsCreateOrConnectWithoutLocation_areasInput, {nullable:true})
    @Type(() => locationsCreateOrConnectWithoutLocation_areasInput)
    connectOrCreate?: locationsCreateOrConnectWithoutLocation_areasInput;

    @Field(() => locationsWhereUniqueInput, {nullable:true})
    @Type(() => locationsWhereUniqueInput)
    connect?: locationsWhereUniqueInput;
}
