import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_effectsUpdateInput } from '../contest-effects/contest-effects-update.input';
import { Type } from 'class-transformer';
import { contest_effectsWhereUniqueInput } from '../contest-effects/contest-effects-where-unique.input';

@ArgsType()
export class UpdateOnecontestEffectsArgs {

    @Field(() => contest_effectsUpdateInput, {nullable:false})
    @Type(() => contest_effectsUpdateInput)
    data!: contest_effectsUpdateInput;

    @Field(() => contest_effectsWhereUniqueInput, {nullable:false})
    @Type(() => contest_effectsWhereUniqueInput)
    where!: contest_effectsWhereUniqueInput;
}
