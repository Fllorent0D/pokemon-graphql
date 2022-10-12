import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutLocationsInput } from './regions-create-without-locations.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutLocationsInput } from './regions-create-or-connect-without-locations.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class regionsCreateNestedOneWithoutLocationsInput {

    @Field(() => regionsCreateWithoutLocationsInput, {nullable:true})
    @Type(() => regionsCreateWithoutLocationsInput)
    create?: regionsCreateWithoutLocationsInput;

    @Field(() => regionsCreateOrConnectWithoutLocationsInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: regionsCreateOrConnectWithoutLocationsInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;
}
