import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesUpdateWithoutGenerationsInput } from './abilities-update-without-generations.input';
import { abilitiesCreateWithoutGenerationsInput } from './abilities-create-without-generations.input';

@InputType()
export class abilitiesUpsertWithWhereUniqueWithoutGenerationsInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => abilitiesUpdateWithoutGenerationsInput)
    update!: abilitiesUpdateWithoutGenerationsInput;

    @Field(() => abilitiesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutGenerationsInput)
    create!: abilitiesCreateWithoutGenerationsInput;
}
