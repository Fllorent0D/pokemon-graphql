import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseCreateWithoutLanguagesInput } from './move-damage-class-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseCreateOrConnectWithoutLanguagesInput } from './move-damage-class-prose-create-or-connect-without-languages.input';
import { move_damage_class_proseWhereUniqueInput } from './move-damage-class-prose-where-unique.input';

@InputType()
export class move_damage_class_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_damage_class_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateWithoutLanguagesInput)
    create?: Array<move_damage_class_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_damage_class_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_damage_class_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_damage_class_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_damage_class_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    connect?: Array<move_damage_class_proseWhereUniqueInput>;
}
