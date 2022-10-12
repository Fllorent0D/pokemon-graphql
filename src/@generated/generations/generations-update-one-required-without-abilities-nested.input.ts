import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutAbilitiesInput } from './generations-create-or-connect-without-abilities.input';
import { generationsUpsertWithoutAbilitiesInput } from './generations-upsert-without-abilities.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';
import { generationsUpdateWithoutAbilitiesInput } from './generations-update-without-abilities.input';

@InputType()
export class generationsUpdateOneRequiredWithoutAbilitiesNestedInput {

    @Field(() => generationsCreateWithoutAbilitiesInput, {nullable:true})
    @Type(() => generationsCreateWithoutAbilitiesInput)
    create?: generationsCreateWithoutAbilitiesInput;

    @Field(() => generationsCreateOrConnectWithoutAbilitiesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutAbilitiesInput;

    @Field(() => generationsUpsertWithoutAbilitiesInput, {nullable:true})
    @Type(() => generationsUpsertWithoutAbilitiesInput)
    upsert?: generationsUpsertWithoutAbilitiesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;

    @Field(() => generationsUpdateWithoutAbilitiesInput, {nullable:true})
    @Type(() => generationsUpdateWithoutAbilitiesInput)
    update?: generationsUpdateWithoutAbilitiesInput;
}
