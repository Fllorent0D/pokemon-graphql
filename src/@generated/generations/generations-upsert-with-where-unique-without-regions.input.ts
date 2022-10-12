import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsUpdateWithoutRegionsInput } from './generations-update-without-regions.input';
import { generationsCreateWithoutRegionsInput } from './generations-create-without-regions.input';

@InputType()
export class generationsUpsertWithWhereUniqueWithoutRegionsInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => generationsUpdateWithoutRegionsInput)
    update!: generationsUpdateWithoutRegionsInput;

    @Field(() => generationsCreateWithoutRegionsInput, {nullable:false})
    @Type(() => generationsCreateWithoutRegionsInput)
    create!: generationsCreateWithoutRegionsInput;
}
