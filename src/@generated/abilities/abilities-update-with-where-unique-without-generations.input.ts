import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { abilitiesUpdateWithoutGenerationsInput } from './abilities-update-without-generations.input';

@InputType()
export class abilitiesUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => abilitiesWhereUniqueInput, {nullable:false})
    @Type(() => abilitiesWhereUniqueInput)
    where!: abilitiesWhereUniqueInput;

    @Field(() => abilitiesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => abilitiesUpdateWithoutGenerationsInput)
    data!: abilitiesUpdateWithoutGenerationsInput;
}
