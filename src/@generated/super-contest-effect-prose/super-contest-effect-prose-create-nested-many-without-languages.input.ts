import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { super_contest_effect_proseCreateWithoutLanguagesInput } from './super-contest-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { super_contest_effect_proseCreateOrConnectWithoutLanguagesInput } from './super-contest-effect-prose-create-or-connect-without-languages.input';
import { super_contest_effect_proseWhereUniqueInput } from './super-contest-effect-prose-where-unique.input';

@InputType()
export class super_contest_effect_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [super_contest_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => super_contest_effect_proseCreateWithoutLanguagesInput)
    create?: Array<super_contest_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [super_contest_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => super_contest_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<super_contest_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [super_contest_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => super_contest_effect_proseWhereUniqueInput)
    connect?: Array<super_contest_effect_proseWhereUniqueInput>;
}
