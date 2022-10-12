import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutRegion_namesInput } from './regions-create-without-region-names.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutRegion_namesInput } from './regions-create-or-connect-without-region-names.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class regionsCreateNestedOneWithoutRegion_namesInput {

    @Field(() => regionsCreateWithoutRegion_namesInput, {nullable:true})
    @Type(() => regionsCreateWithoutRegion_namesInput)
    create?: regionsCreateWithoutRegion_namesInput;

    @Field(() => regionsCreateOrConnectWithoutRegion_namesInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutRegion_namesInput)
    connectOrCreate?: regionsCreateOrConnectWithoutRegion_namesInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;
}
