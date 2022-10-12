import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogUncheckedUpdateManyInput } from '../move-effect-changelog/move-effect-changelog-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { move_effect_changelogWhereInput } from '../move-effect-changelog/move-effect-changelog-where.input';

@ArgsType()
export class UpdateManymoveEffectChangelogArgs {

    @Field(() => move_effect_changelogUncheckedUpdateManyInput, {nullable:false})
    @Type(() => move_effect_changelogUncheckedUpdateManyInput)
    data!: move_effect_changelogUncheckedUpdateManyInput;

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    @Type(() => move_effect_changelogWhereInput)
    where?: move_effect_changelogWhereInput;
}
