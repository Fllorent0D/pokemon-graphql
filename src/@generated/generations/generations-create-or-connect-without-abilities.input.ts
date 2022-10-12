import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';

@InputType()
export class generationsCreateOrConnectWithoutAbilitiesInput {

    @Field(() => generationsWhereUniqueInput, {nullable:false})
    @Type(() => generationsWhereUniqueInput)
    where!: generationsWhereUniqueInput;

    @Field(() => generationsCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => generationsCreateWithoutAbilitiesInput)
    create!: generationsCreateWithoutAbilitiesInput;
}
