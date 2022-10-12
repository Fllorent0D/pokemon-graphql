import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseCreateWithoutLanguagesInput } from './move-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_effect_proseCreateOrConnectWithoutLanguagesInput } from './move-effect-prose-create-or-connect-without-languages.input';
import { move_effect_proseWhereUniqueInput } from './move-effect-prose-where-unique.input';

@InputType()
export class move_effect_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_proseCreateWithoutLanguagesInput)
    create?: Array<move_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_effect_proseWhereUniqueInput)
    connect?: Array<move_effect_proseWhereUniqueInput>;
}
