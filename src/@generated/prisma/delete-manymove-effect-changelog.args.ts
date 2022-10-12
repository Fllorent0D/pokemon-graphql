import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_changelogWhereInput } from '../move-effect-changelog/move-effect-changelog-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveEffectChangelogArgs {

    @Field(() => move_effect_changelogWhereInput, {nullable:true})
    @Type(() => move_effect_changelogWhereInput)
    where?: move_effect_changelogWhereInput;
}
