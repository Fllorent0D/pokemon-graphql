import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesCreateWithoutGenerationsInput } from './types-create-without-generations.input';

@InputType()
export class typesCreateOrConnectWithoutGenerationsInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => typesCreateWithoutGenerationsInput)
    create!: typesCreateWithoutGenerationsInput;
}
