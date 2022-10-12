import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effectsWhereInput } from '../super-contest-effects/super-contest-effects-where.input';

@InputType()
export class Super_contest_effectsRelationFilter {

    @Field(() => super_contest_effectsWhereInput, {nullable:true})
    is?: super_contest_effectsWhereInput;

    @Field(() => super_contest_effectsWhereInput, {nullable:true})
    isNot?: super_contest_effectsWhereInput;
}
