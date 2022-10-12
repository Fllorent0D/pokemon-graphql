import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutGenerationsInput } from './abilities-create-without-generations.input';

@InputType()
export class abilitiesCreateOrConnectWithoutGenerationsInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutGenerationsInput)
    create!: abilitiesCreateWithoutGenerationsInput;
}
