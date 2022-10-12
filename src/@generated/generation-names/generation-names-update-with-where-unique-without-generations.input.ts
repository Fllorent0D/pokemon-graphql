import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';
import { Type } from 'class-transformer';
import { generation_namesUpdateWithoutGenerationsInput } from './generation-names-update-without-generations.input';

@InputType()
export class generation_namesUpdateWithWhereUniqueWithoutGenerationsInput {

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;

    @Field(() => generation_namesUpdateWithoutGenerationsInput, {nullable:false})
    @Type(() => generation_namesUpdateWithoutGenerationsInput)
    data!: generation_namesUpdateWithoutGenerationsInput;
}
