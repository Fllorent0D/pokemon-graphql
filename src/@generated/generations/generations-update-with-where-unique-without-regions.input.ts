import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsUpdateWithoutRegionsInput } from './generations-update-without-regions.input';

@InputType()
export class generationsUpdateWithWhereUniqueWithoutRegionsInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => generationsUpdateWithoutRegionsInput)
    data!: generationsUpdateWithoutRegionsInput;
}
