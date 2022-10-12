import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseMove_damage_class_idLocal_language_idCompoundUniqueInput } from './move-damage-class-prose-move-damage-class-id-local-language-id-compound-unique.input';

@InputType()
export class move_damage_class_proseWhereUniqueInput {

    @Field(() => move_damage_class_proseMove_damage_class_idLocal_language_idCompoundUniqueInput, {nullable:true})
    move_damage_class_id_local_language_id?: move_damage_class_proseMove_damage_class_idLocal_language_idCompoundUniqueInput;
}
