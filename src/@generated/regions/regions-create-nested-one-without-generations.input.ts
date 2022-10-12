import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';
import { Type } from 'class-transformer';
import { regionsCreateOrConnectWithoutGenerationsInput } from './regions-create-or-connect-without-generations.input';
import { regionsWhereUniqueInput } from './regions-where-unique.input';

@InputType()
export class regionsCreateNestedOneWithoutGenerationsInput {

    @Field(() => regionsCreateWithoutGenerationsInput, {nullable:true})
    @Type(() => regionsCreateWithoutGenerationsInput)
    create?: regionsCreateWithoutGenerationsInput;

    @Field(() => regionsCreateOrConnectWithoutGenerationsInput, {nullable:true})
    @Type(() => regionsCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: regionsCreateOrConnectWithoutGenerationsInput;

    @Field(() => regionsWhereUniqueInput, {nullable:true})
    @Type(() => regionsWhereUniqueInput)
    connect?: regionsWhereUniqueInput;
}
