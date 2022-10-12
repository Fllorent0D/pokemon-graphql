import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsUpdateWithoutAbilitiesInput } from './generations-update-without-abilities.input';
import { Type } from 'class-transformer';
import { generationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';

@InputType()
export class generationsUpsertWithoutAbilitiesInput {

    @Field(() => generationsUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => generationsUpdateWithoutAbilitiesInput)
    update!: generationsUpdateWithoutAbilitiesInput;

    @Field(() => generationsCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => generationsCreateWithoutAbilitiesInput)
    create!: generationsCreateWithoutAbilitiesInput;
}
