import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { regionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import { regionsCreateWithoutGenerationsInput } from './regions-create-without-generations.input';

@InputType()
export class regionsCreateOrConnectWithoutGenerationsInput {

    @Field(() => regionsWhereUniqueInput, {nullable:false})
    @Type(() => regionsWhereUniqueInput)
    where!: regionsWhereUniqueInput;

    @Field(() => regionsCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => regionsCreateWithoutGenerationsInput)
    create!: regionsCreateWithoutGenerationsInput;
}
