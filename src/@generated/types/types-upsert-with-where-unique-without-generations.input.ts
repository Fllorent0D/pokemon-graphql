import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { typesUpdateWithoutGenerationsInput } from './types-update-without-generations.input';
import { typesCreateWithoutGenerationsInput } from './types-create-without-generations.input';

@InputType()
export class typesUpsertWithWhereUniqueWithoutGenerationsInput {

    @Field(() => typesWhereUniqueInput, {nullable:false})
    @Type(() => typesWhereUniqueInput)
    where!: typesWhereUniqueInput;

    @Field(() => typesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => typesUpdateWithoutGenerationsInput)
    update!: typesUpdateWithoutGenerationsInput;

    @Field(() => typesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => typesCreateWithoutGenerationsInput)
    create!: typesCreateWithoutGenerationsInput;
}
