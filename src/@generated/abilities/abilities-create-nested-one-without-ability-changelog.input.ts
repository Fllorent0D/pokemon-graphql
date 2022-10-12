import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesCreateWithoutAbility_changelogInput } from './abilities-create-without-ability-changelog.input';
import { Type } from 'class-transformer';
import { abilitiesCreateOrConnectWithoutAbility_changelogInput } from './abilities-create-or-connect-without-ability-changelog.input';
import { abilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class abilitiesCreateNestedOneWithoutAbility_changelogInput {

    @Field(() => abilitiesCreateWithoutAbility_changelogInput, {nullable:true})
    @Type(() => abilitiesCreateWithoutAbility_changelogInput)
    create?: abilitiesCreateWithoutAbility_changelogInput;

    @Field(() => abilitiesCreateOrConnectWithoutAbility_changelogInput, {nullable:true})
    @Type(() => abilitiesCreateOrConnectWithoutAbility_changelogInput)
    connectOrCreate?: abilitiesCreateOrConnectWithoutAbility_changelogInput;

    @Field(() => abilitiesWhereUniqueInput, {nullable:true})
    @Type(() => abilitiesWhereUniqueInput)
    connect?: abilitiesWhereUniqueInput;
}
