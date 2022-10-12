import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutRegionsInput } from './generations-create-without-regions.input';

@InputType()
export class generationsCreateOrConnectWithoutRegionsInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutRegionsInput, {nullable:false})
    @Type(() => generationsCreateWithoutRegionsInput)
    create!: generationsCreateWithoutRegionsInput;
}
