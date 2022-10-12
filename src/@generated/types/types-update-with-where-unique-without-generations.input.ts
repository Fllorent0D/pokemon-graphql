import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesUpdateWithoutGenerationsInput } from './types-update-without-generations.input';

@InputType()
export class typesUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => typesUpdateWithoutGenerationsInput)
    data!: typesUpdateWithoutGenerationsInput;
}
