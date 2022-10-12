import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogScalarWhereInput } from './ability-changelog-scalar-where.input';
import { Type } from 'class-transformer';
import { ability_changelogUncheckedUpdateManyWithoutAbility_changelogInput } from './ability-changelog-unchecked-update-many-without-ability-changelog.input';

@InputType()
export class ability_changelogUpdateManyWithWhereWithoutAbilitiesInput {

    @Field(() => ability_changelogScalarWhereInput, {nullable:false})
    @Type(() => ability_changelogScalarWhereInput)
    where!: ability_changelogScalarWhereInput;

    @Field(() => ability_changelogUncheckedUpdateManyWithoutAbility_changelogInput, {nullable:false})
    @Type(() => ability_changelogUncheckedUpdateManyWithoutAbility_changelogInput)
    data!: ability_changelogUncheckedUpdateManyWithoutAbility_changelogInput;
}
