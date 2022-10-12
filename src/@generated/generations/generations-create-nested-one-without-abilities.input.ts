import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutAbilitiesInput } from './generations-create-without-abilities.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutAbilitiesInput } from './generations-create-or-connect-without-abilities.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutAbilitiesInput {

    @Field(() => generationsCreateWithoutAbilitiesInput, {nullable:true})
    @Type(() => generationsCreateWithoutAbilitiesInput)
    create?: generationsCreateWithoutAbilitiesInput;

    @Field(() => generationsCreateOrConnectWithoutAbilitiesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutAbilitiesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutAbilitiesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}
