import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';
import { Type } from 'class-transformer';
import { generation_namesUpdateWithoutGenerationsInput } from './generation-names-update-without-generations.input';
import { generation_namesCreateWithoutGenerationsInput } from './generation-names-create-without-generations.input';

@InputType()
export class generation_namesUpsertWithWhereUniqueWithoutGenerationsInput {

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;

    @Field(() => generation_namesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => generation_namesUpdateWithoutGenerationsInput)
    update!: generation_namesUpdateWithoutGenerationsInput;

    @Field(() => generation_namesCreateWithoutGenerationsInput, {nullable:false})
    @Type(() => generation_namesCreateWithoutGenerationsInput)
    create!: generation_namesCreateWithoutGenerationsInput;
}
